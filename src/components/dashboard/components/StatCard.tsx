import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"


interface Props{
    title: string
    value: string
    change: string
    changeType: "up" | "down"
    icon: React.ReactNode
}

export const StatCard = ({
    title,
    value,
    change,
    changeType,
    icon,
}:Props ) => {
    return (
        <Card className="bg-card border-border">
            <CardContent className="p-5">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <span className="text-sm text-muted-foreground">{title}</span>
                        <span className="text-2xl font-bold text-foreground">{value}</span>
                        <div className="flex items-center gap-1 text-xs">
                            {changeType === "up" ? (
                                <TrendingUp className="size-3 text-success" />
                            ) : (
                                <TrendingDown className="size-3 text-destructive" />
                            )}
                            <span className={changeType === "up" ? "text-success" : "text-destructive"}>
                                {change}
                            </span>
                            <span className="text-muted-foreground">vs last month</span>
                        </div>
                    </div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {icon}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
