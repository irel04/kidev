'use client'

import { ThemeContext } from "@/components/ThemeProvider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Moon, Sun } from "lucide-react"
import { useContext } from "react"

export default function DarkModeToggle() {

	const {theme: mode, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
    setTheme(mode === 'dark' ? 'light' : 'dark');
  };

	return (
		<div className="flex gap-2 fixed right-2 top-3 md:top-auto md:bottom-4 md:right-8 2xl:bottom-20 2xl:right-6 items-center z-10">
			<Switch id="dark-mode" onClick={toggleTheme} checked={mode === "light"}/>
			{mode === "dark" ? <Sun size={16} /> : <Moon size={16} />  }
			<Label className="hidden md:block">{mode === "dark" ? "Light" : "Dark"} Mode</Label>
		</div>
	)
}