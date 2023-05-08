import {
	BookOpenIcon,
	DocumentTextIcon,
	PresentationChartBarIcon,
	TableCellsIcon,
	VideoCameraIcon,
} from "@heroicons/react/20/solid"
import { SessionCard } from "~/components/atoms"
import { LiveIcon, RTEIcon } from "~/svgs"

const types = [
	{
		label: "Live",
		value: "live",
		icon: LiveIcon,
		color: "red",
		colors: {
			card: "bg-red-50 dark:bg-red-800 text-red-500 dark:text-red-200",
			icon: "text-red-200/50 dark:text-red-400/50",
			border: "border-red-200 dark:border-red-600",
		},
		type: "session",
		contentType: "live",
	},
	{
		label: "Recorded",
		value: "recorded",
		icon: VideoCameraIcon,
		color: "sky",
		colors: {
			card: "bg-sky-50 dark:bg-sky-800 text-sky-500 dark:text-sky-200",
			icon: "text-sky-200/50 dark:text-sky-400/50",
			border: "border-sky-200 dark:border-sky-600",
		},
		type: "content",
		contentType: "recorded",
	},
	{
		label: "RichText",
		value: "rte",
		icon: RTEIcon,
		color: "neutral",
		colors: {
			card: "bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-200",
			icon: "text-neutral-200/50 dark:text-neutral-400/50",
			border: "border-neutral-200 dark:border-neutral-600",
		},
		type: "content",
		contentType: "text",
	},
	{
		label: "PDF",
		value: "pdf",
		icon: BookOpenIcon,
		color: "rose",
		colors: {
			card: "bg-rose-50 dark:bg-rose-800 text-rose-500 dark:text-rose-200",
			icon: "text-rose-200/50 dark:text-rose-400/50",
			border: "border-rose-200 dark:border-rose-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "PPT",
		value: "ppt",
		icon: PresentationChartBarIcon,
		color: "yellow",
		colors: {
			card: "bg-yellow-50 dark:bg-yellow-800 text-yellow-500 dark:text-yellow-200",
			icon: "text-yellow-200/50 dark:text-yellow-400/50",
			border: "border-yellow-200 dark:border-yellow-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "Document",
		value: "doc",
		icon: DocumentTextIcon,
		color: "blue",
		colors: {
			card: "bg-blue-50 dark:bg-blue-800 text-blue-500 dark:text-blue-200",
			icon: "text-blue-200/50 dark:text-blue-400/50",
			border: "border-blue-200 dark:border-blue-600",
		},
		type: "content",
		contentType: "document",
	},
	{
		label: "Spreadsheet",
		value: "xls",
		icon: TableCellsIcon,
		color: "green",
		colors: {
			card: "bg-green-50 dark:bg-green-800 text-green-500 dark:text-green-200",
			icon: "text-green-200/50 dark:text-green-400/50",
			border: "border-green-200 dark:border-green-600",
		},
		type: "content",
		contentType: "document",
	},
]

const dummySessions = [
	{
		_id: "6440e156587356559bf0e1f4",
		createdAt: "2023-04-20T06:53:10.838Z",
		updatedAt: "2023-04-20T06:53:10.838Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "Text Session 1",
		type: "text",
		priority: 1,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-20T07:51:00.000Z",
		endDate: "2023-04-20T08:51:00.000Z",
		required: true,
		config: {
			text: '<h1>Feature-rich editor</h1><h1>Discover the riches of our editor ✨</h1><p>Read on to better understand the functionalities you can test with this demo.</p><h2>💡 Did you know that…</h2><ul><li><p>CKEditor is <strong>customizable</strong>. You can fine-tune the set of enabled plugins, available toolbar buttons, and the behavior of features.</p></li><li><p>The editor supports <strong>@mentions</strong>. Start typing <code>@An</code> to see available suggestions.</p></li><li><p>You can <strong>paste content</strong> from Word or Google Docs, retaining the original document structure and formatting.</p></li><li><p>Thanks to Import from Word , you can <strong>convert</strong> a DOCX document into HTML and edit it in CKEditor 5.</p></li><li><p>You can <strong>export your document</strong> to PDF or Word with a single click.</p></li><li><p>This demo showcases <a target="_blank" rel="noopener noreferrer" href="https://ckeditor.com/ckbox/">CKBox</a> to <strong>manage images and other files</strong>. You can enable your own upload adapter instead.</p></li></ul><h2>🚀 Autoformatting in CKEditor 5</h2><p>Some features of CKEditor 5 might be hard to spot at first glance. Thanks to <strong>autoformatting</strong>, you can use handy shortcuts in the editor to format the text on the fly:</p><p><strong>Block formatting</strong> Bulleted list Start a line with <code>*</code> or <code>-</code> followed by a space. Numbered list Start a line with <code>1.</code> or <code>1)</code> followed by a space. To-do list Start a line with <code>[ ]</code> or <code>[x]</code> followed by a space to insert an unchecked or checked list item. Headings Start a line with <code>#</code>, <code>##</code>, or <code>###</code> followed by a space to create a heading 1, heading 2, or heading 3. Block quote Start a line with <code>&gt;</code> followed by a space. Code block Start a line with <code>```</code>. Horizontal line Start a line with <code>---</code>. <strong>Inline formatting</strong> <strong>Bold</strong> Type <code>**</code> or <code>__</code> around your text. <em>Italic</em> Type <code>*</code> or <code>_</code> around your text. <code>Code</code> Type <code>`</code> around your text. <s>Strikethrough</s> Type <code>~~</code> around your text.</p>',
			format: "html",
			extension: "html",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1ea",
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "html",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
		],
	},
	{
		_id: "6440e23c587356559bf0e1f6",
		createdAt: "2023-04-20T06:57:00.908Z",
		updatedAt: "2023-04-26T11:10:37.812Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "Recorded Session 1 updated",
		type: "document",
		priority: 2,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-20T08:58:00.000Z",
		endDate: "2023-04-20T10:28:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/documents/document_49112f30-b735-4e16-8461-995d14ec4be9.pdf",
			extension: "pdf",
			referenceId: "644906ad1445697160249691",
			filename: "document_49112f30-b735-4e16-8461-995d14ec4be9.pdf",
			originalName: "Next.JS CheatSheet.pdf",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
			"6440dab3587356559bf0e1ee",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "pdf",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
			{
				_id: "6440dab3587356559bf0e1ee",
				title: "Modular Programming in JavaScript",
				details:
					"Develop modules of code that can be reused in various places in your code, and get\nrid of static code\nIntroduction to Functions\nWorking with functions\nFunction parameters and calling\nArrow Function",
				priority: 4,
			},
		],
	},
	{
		_id: "6440e2df587356559bf0e1f8",
		createdAt: "2023-04-20T06:59:43.103Z",
		updatedAt: "2023-04-20T06:59:43.103Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "PPT Session 1",
		type: "document",
		priority: 3,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-20T09:00:00.000Z",
		endDate: "2023-04-20T11:15:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/documents/document_6210ff28-6f0a-41b9-8a82-40f36ae439ba.pptx",
			extension: "pptx",
			referenceId: "6440e2df587356559bf0e1f7",
			filename: "document_6210ff28-6f0a-41b9-8a82-40f36ae439ba.pptx",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1ea",
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "pptx",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
		],
	},
	{
		_id: "644618e5587356559bf0e1fb",
		createdAt: "2023-04-24T05:51:33.707Z",
		updatedAt: "2023-04-24T05:51:33.707Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "recorded 1",
		type: "recorded",
		priority: 4,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-24T05:50:00.000Z",
		endDate: "2023-04-24T06:20:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/videos/video_27c7915b-dc43-4270-8cd2-8e3ba91c0139.mp4",
			extension: "mp4",
			referenceId: "644618e5587356559bf0e1fa",
			filename: "video_27c7915b-dc43-4270-8cd2-8e3ba91c0139.mp4",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1ea",
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "mp4",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
		],
	},
	{
		_id: "64461ccbed33623be600b9bb",
		createdAt: "2023-04-24T06:08:11.184Z",
		updatedAt: "2023-04-24T06:08:11.184Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "recorded 2",
		type: "recorded",
		priority: 5,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-24T06:06:00.000Z",
		endDate: "2023-04-24T06:51:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/videos/video_8bd344d9-08d6-4cff-b2a7-ab98bf0ae6ec.mp4",
			extension: "mp4",
			referenceId: "64461ccbed33623be600b9ba",
			filename: "video_8bd344d9-08d6-4cff-b2a7-ab98bf0ae6ec.mp4",
			isLive: false,
			hasEnded: false,
		},
		topicIds: ["6440dab3587356559bf0e1ea", "6440dab3587356559bf0e1eb"],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "mp4",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
		],
	},
	{
		_id: "64461da9ed33623be600b9bd",
		createdAt: "2023-04-24T06:11:53.989Z",
		updatedAt: "2023-04-24T06:11:53.989Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "recorded 3",
		type: "recorded",
		priority: 6,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-24T06:10:00.000Z",
		endDate: "2023-04-24T06:40:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/videos/video_bcd49f14-1017-4ac9-b89b-01deface0351.mp4",
			extension: "mp4",
			referenceId: "64461da9ed33623be600b9bc",
			filename: "video_bcd49f14-1017-4ac9-b89b-01deface0351.mp4",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1ea",
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "mp4",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
		],
	},
	{
		_id: "64461e3ced33623be600b9bf",
		createdAt: "2023-04-24T06:14:20.472Z",
		updatedAt: "2023-04-24T06:14:20.472Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "recorded 4",
		type: "recorded",
		priority: 7,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-24T06:12:00.000Z",
		endDate: "2023-04-24T06:42:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/videos/video_51951f86-e006-48ad-a430-cfeac9b6afef.mp4",
			extension: "mp4",
			referenceId: "64461e3ced33623be600b9be",
			filename: "video_51951f86-e006-48ad-a430-cfeac9b6afef.mp4",
			isLive: false,
			hasEnded: false,
		},
		topicIds: ["6440dab3587356559bf0e1ea", "6440dab3587356559bf0e1eb"],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "mp4",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
		],
	},
	{
		_id: "64461eb7ed33623be600b9c1",
		createdAt: "2023-04-24T06:16:23.471Z",
		updatedAt: "2023-04-24T06:16:23.471Z",
		createdBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		updatedBy: {
			uid: "nNLx9mBLcPhmsBfyocygMPtwjD93",
			fullname: "Ankit Chaudhari",
			email: "ankitchaudhari1598@gmail.com",
			username: "ankitchaudhari1598150",
			profileImage:
				"https://static.lisaapp.in/users/nNLx9mBLcPhmsBfyocygMPtwjD93/profileImage_1680008232682.png",
		},
		title: "recorded 5",
		type: "recorded",
		priority: 8,
		orgId: "6422e49d24fa46caa844f573",
		status: "draft",
		startDate: "2023-04-24T06:14:00.000Z",
		endDate: "2023-04-24T06:59:00.000Z",
		required: true,
		config: {
			url: "https://static.lisaapp.in/6422e49d24fa46caa844f573/cohorts/6440dab3587356559bf0e1e9/content/videos/video_2d58d668-1022-42d0-bae7-1050a48786f1.mp4",
			extension: "mp4",
			referenceId: "64461eb7ed33623be600b9c0",
			filename: "video_2d58d668-1022-42d0-bae7-1050a48786f1.mp4",
			isLive: false,
			hasEnded: false,
		},
		topicIds: [
			"6440dab3587356559bf0e1ea",
			"6440dab3587356559bf0e1eb",
			"6440dab3587356559bf0e1ec",
		],
		cohortId: "6440dab3587356559bf0e1e9",
		extension: "mp4",
		cohort: {
			_id: "6440dab3587356559bf0e1e9",
			title: "JavaScript Zero to Hero B2",
			uid: "LUESJSAPR2302",
			details: "JavaScript Zero to Hero",
			mode: "online",
			coverImage: null,
			icon: null,
		},
		topics: [
			{
				_id: "6440dab3587356559bf0e1ea",
				title: "Basics of JavaScript",
				details:
					"Understand the core concepts of JavaScript Language, When it started, what is the\nreason JS language gaining popularity, Code editor, Developer Console\n",
				priority: 0,
			},
			{
				_id: "6440dab3587356559bf0e1eb",
				title: "Objects & Data in JS",
				details:
					"Learn how to write your first JS Code, see it working from there to code structures,\nData Types, Variables, Interactive popups, and alert boxes\nData Types\nVariables\nOperators\nSpecial characters/escape characters\n",
				priority: 1,
			},
			{
				_id: "6440dab3587356559bf0e1ec",
				title: "Decision making in JavaScript",
				details:
					"Understand the underlying decision-making procedure in a JS programming\nlanguage while playing with 1 & 0 of computer science\nif\nif-else\nif-else if-else\nswitch",
				priority: 2,
			},
		],
	},
]

const Sessions = ({ sessions = dummySessions }) => {
	return sessions.length
		? sessions.map(session => {
				let type
				if (session.type === "document") {
					type = types.find(
						t =>
							t.contentType === session.type &&
							session.extension?.includes(t.value)
					)
				} else {
					type = types.find(t => t.contentType === session.type)
				}

				if (!type) return null
				return (
					<SessionCard
						key={session._id}
						type={type}
						session={session}
					/>
				)
		  })
		: null
}

export default Sessions
