import Cart from "../models/Cart.js";

export default async function deletecartcontroller(req,res){
    const {userid}=req.body;
    try {
        // Find and delete cart items associated with the provided userid
        const deletedItems = await Cart.deleteMany({ userid });

        if (deletedItems.deletedCount > 0) {
            return res.json({ message: "Cart items deleted successfully", success: true });
        } else {
            return res.json({ message: "No cart items found for the provided userid", success: true });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}