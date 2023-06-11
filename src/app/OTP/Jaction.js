"use server";

import Cmail from "../../../models/Contact";
import dbConnect from "../../../utils/DBConact";

const Mubmit = async (data) => {
    try {
        await dbConnect();
        await Cmail.create(data);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export default Mubmit;
