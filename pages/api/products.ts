import {Response} from "express";
import clientPromise from "../../lib/mongodb";

export default async (req : Request, res : Response) => {
  try {
    const client = await clientPromise;
    const db = client.db("shop");

    const products = await db.collection("products").find().limit(40).toArray();

    res.json(products);
  } catch (e) {
    console.error(e);
  }
};
