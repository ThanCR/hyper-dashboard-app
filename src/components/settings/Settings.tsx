import { Settings as SettingsIcon } from "lucide-react"


export const Settings = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 py-20 text-muted-foreground">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-secondary">
                <SettingsIcon className="size-8" />
            </div>
            <div className="text-center">
                <h2 className="text-lg font-semibold text-foreground">Settings</h2>
                <p className="text-sm text-muted-foreground mt-1">
                    Configuration panel coming soon.
                </p>
            </div>
        </div>
    )
}
