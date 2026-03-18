import type { DialogData } from "@/types/DialogData"
import { useState } from "react"

export type DialogAction = 'View' | 'Edit' | 'Add'

export const useItemDialog = () => {

    const [addDialogOpen, setAddDialogOpen] = useState(false)
    const [dialogAction, setDialogAction] = useState<DialogAction>('' as DialogAction)
    const [activeItemData, setActiveItemData] = useState<DialogData>({} as DialogData)

    const onOpenItemDialog = (action: DialogAction, itemData: DialogData = {} as DialogData) => {
        setActiveItemData(itemData)
        setDialogAction(action)
        setAddDialogOpen(true)
    }
    const onCloseItemDialog = () => {
        setAddDialogOpen(false)
        setActiveItemData({} as DialogData)
    }

    const onSubmitData = (action: DialogAction, itemData?: DialogData) => {
        console.log(`submit action: ${action}`)
        console.log(`Submit data:  ${JSON.stringify(itemData)}`)
    }

    return {
        addDialogOpen,
        dialogAction,
        activeItemData,
        
        setAddDialogOpen,
        setDialogAction,
        setActiveItemData,
        onOpenItemDialog,
        onSubmitData,
        onCloseItemDialog
    }
}



