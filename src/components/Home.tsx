export default function Home() {
    return (
        <div className="flex min-h-dvh items-center justify-center px-6 bg-gradient-to-br from-gray-100 to-gray-200">
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    Made By: Hardik Biyani
                </h1>
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                    Email ID: hardikbiyani9@gmail.com
                </h2>
                <p className="text-gray-700 mb-2 font-medium">Included Features:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base">
                    <li><span className="font-semibold text-gray-800">Badges</span></li>
                    <li><span className="font-semibold text-gray-800">Accordion</span></li>
                    <li>Created using <span className="font-medium">React TypeScript</span>, and <span className="font-medium">TailwindCSS</span></li>
                    <li>Fully <span className="font-semibold ">responsive</span> layout</li>
                    <li>Storybook <span className="font-semibold">stories</span> added for both components</li>
                    <li>Detailed <span className="font-semibold">documentation</span> included</li>
                </ol>
            </div>
        </div>
    )
}
