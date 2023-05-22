#!/bin/bash

# Function to recursively update submodules
update_submodules() {
	echo
	echo "--------------------------${PWD}--------------------------"
	echo
	local parent_path=$1
	local submodule_paths=$(git config --file $PWD/.gitmodules --get-regexp path | awk '{ print $2 }')

	echo "Updating submodules in $PWD"
	echo "Number of submodules to update: ${#submodule_paths[@]}"
	echo

	for submodule_path in $submodule_paths; do
		echo
		echo "Updating submodule: $submodule_path"
		echo

		local submodule_url=$(git config --file $PWD/.gitmodules --get "submodule.$submodule_path.url")
		local submodule_branch=$(git config --file $PWD/.gitmodules --get "submodule.$submodule_path.branch")
		local submodule_dir=$PWD/$submodule_path

		echo "Submodule URL: $submodule_url"
		echo "Submodule Branch: $submodule_branch"
		echo "Submodule Directory: $submodule_dir"
		echo

		rm -rf $submodule_dir

		# Update the submodule URL with GITHUB_TOKEN
		local updated_submodule_url=$(echo $submodule_url | sed "s|github.com|${GITHUB_TOKEN}@github.com|")
		local masked_submodule_url=$(echo $updated_submodule_url | sed "s|${GITHUB_TOKEN}|********|")

		echo "Updated submodule URL with GITHUB_TOKEN: $masked_submodule_url"
		echo

		# If the submodule doesn't exist, clone it using the updated URL and specified branch
		echo "Cloning submodule..."
		(cd $PWD && git clone --branch $submodule_branch $updated_submodule_url $submodule_dir)

		# Recursively update submodules within the submodule
		echo "Recursively updating submodules..."
		(cd $submodule_dir && update_submodules $submodule_dir)
		echo
	done
}

# Check if `git` command is available
if ! command -v git &>/dev/null; then
	echo "Git not found. Please install Git and try again."
	exit 1
fi

# Check if GITHUB_TOKEN is set
if [ -z "$GITHUB_TOKEN" ]; then
	echo "GITHUB_TOKEN is not set. Please set the GITHUB_TOKEN environment variable."
	exit 1
fi

# Update submodules
echo "--------------------------Adding Submodules--------------------------"
update_submodules .
echo "--------------------------Submodules Added--------------------------"
