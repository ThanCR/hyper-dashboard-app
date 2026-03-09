


export const PieToolTip = ({active, payload}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-lg">
        <p className="text-sm font-medium text-foreground">{payload[0].name}</p>
        <p className="text-xs text-muted-foreground">{payload[0].value}% of sales</p>
      </div>
    )
  }
  return null
}
