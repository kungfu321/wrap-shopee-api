import axios from "axios";

export default async (req, res) => {
    try {
        const { data } = await axios.get(
            "https://shopee.vn/api/v4/banner/get_list?category_id=84&type=category"
        );
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
    }
};
