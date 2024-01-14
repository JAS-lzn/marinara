import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
	return (
		<html>
			<head>
				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>marinara</title>
				<link rel="stylesheet" href="/styles.css" />
				<link rel="stylesheet" href="/tailwind_generated.css" />
			</head>
			<body>
				<Component />
			</body>
		</html>
	);
}
