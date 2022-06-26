import { useState } from "react";
import DatePicker from "./components/DatePicker";

function App() {
    const [pickedDate, setPickedDate] = useState(null);

    return (
        <div className="flex min-h-screen justify-center bg-slate-100 py-20 font-barlow dark:bg-slate-800">
            <DatePicker
                label={"Date"}
                placeholder="MM/D/YYYY"
                pickedDate={pickedDate}
                onPickDate={setPickedDate}
            />
        </div>
    );
}

export default App;
