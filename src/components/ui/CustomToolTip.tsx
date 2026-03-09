

export const  CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
                <p className="text-sm font-medium text-foreground">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <p key={index} className="text-xs text-muted-foreground">
                        {entry.name}: <span className="font-medium text-foreground">
                            {typeof entry.value === "number" && (entry.name === "revenue" || entry.name === "profit")
                                ? `$${entry.value.toLocaleString()}`
                                : entry.value}
                        </span>
                    </p>
                ))}
            </div>
        )
    }
    return null
}