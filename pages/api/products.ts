import clientPromise from "../../lib/mongodb";

export default async(req: any, res: any) => {
    try {
        const client = await clientPromise;
        const db = client.db("shop");

        const products = await db
            .collection("category")
            .find()
            .limit(40)
            .toArray();

        res.json(products);
    } catch (e) {
        console.error(e);
    }
};