// import { Appbar } from "../components/Appbar"
// import { Balance } from "../components/Balance"
// import { Users } from "../components/Users"

// export const Dashboard = () => {
//     return <div>
//         <Appbar />
//         <div className="m-8">
//             <Balance value={"10,000"} />
//             <Users />
//         </div>
//     </div>
// }


import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import api from "../lib/api";

export const Dashboard = () => {
    const [balance, setBalance] = useState(0);

    const fetchBalance = async () => {
        try {
            const res = await api.get("/api/v1/account/balance");
            setBalance(res.data.balance);
        } catch (err) {
            console.error("Failed to fetch balance", err);
        }
    };

    useEffect(() => {
        fetchBalance();
    }, []);

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    );
};