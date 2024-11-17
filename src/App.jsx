import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";

export default function App() {
  return (
    <div className="font-poppins max-w-[800px] min-h-screen mx-auto flex flex-col gap-20 items-center justify-center">
			<AppHeader />
			<AppMain />
		</div>
  )
}
