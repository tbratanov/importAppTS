import Glue from "@glue42/desktop"

export async function initializeGlue() {
    if((window as any).glue) {
        return (window as any).glue
    } else{
        try {
            return Glue({layouts: "full"})
        } catch(error) {
            console.warn(error)
        }
    }
}