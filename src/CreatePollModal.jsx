import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase/firebase";

const CreatePollModal = ({ setIsCreatePollModal, userName }) => {
    const [errorMessage, seterrorMessage] = useState("")


    const [question, setQuestion] = useState(
        {
            title: "",
            options: ["", ""]
        }
    );

    const addOption = () => {
        if (question.options.length < 10) {
            setQuestion({
                ...question,
                options: [...question.options, ""]
            })
        }
    }


    async function handleCreatePoll() {
        //validation
        if (question.title.trim() === "" || question.options.some((option) => option.trim() === "")) {
            return seterrorMessage("Please enter values into the input fields")
        }
        //poll object
        const pollObject = {
            question: question.title,
            options: question.options.map((data)=>{return {option: data, votes: 0}}),
            createdBy: userName,
            totalVotes: 0,
            createdAt: serverTimestamp()
        }

        try {
            let collectionRef = collection(db, "polls");
            await addDoc(collectionRef, pollObject);
            setIsCreatePollModal(false)
        } catch (err) {
            console.log("Error detected:", err);
        }

    }

    console.log(userName)



    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="rounded-xl bg-accent-blue w-[95%] max-w-3xl font-montserrat fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2 max-h-[90vh] overflow-y-auto max-sm:rounded-none max-sm:w-full max-sm:max-h-screen max-sm:top-[20vh] max-sm:left-0 max-sm:translate-x-0 max-sm:translate-y-0">
                <div className="flex justify-between border-b border-gray-200 p-4">
                    <p className="font-extrabold">Create New Poll</p>
                    <svg onClick={() => { setIsCreatePollModal(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="p-4">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p className="text-[15px]">GENERAL INFO</p>
                    </div>
                    <div className="w-full bg-blue-50 p-4 rounded-sm grid items-start grid-cols-1 max-sm:grid-cols-1">
                        <p className="text-center">{errorMessage}</p>
                        <div>
                            <p className="text-[17px] font-raleway max-sm:my-2">Question</p>
                            <input onChange={(e) => { setQuestion({ ...question, title: e.target.value }) }} className="w-full h-10 border border-gray-300 rounded-md px-3" type="text" placeholder="Question" />
                            <div className="px-6">
                                <div>
                                    <div className="flex justify-between my-2">
                                        <p className="text-[15px] font-raleway my-1">Options</p>
                                        <div onClick={() => { addOption() }} className="bg-white flex w-fit gap-1 items-center rounded-md p-1 cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                            <p className="text-[13px]">Add Option</p>
                                        </div>
                                    </div>
                                    {question.options.map((_, optIndex) => (
                                        <input onChange={(e) => {
                                            const newOptions = [...question.options]
                                            newOptions[optIndex] = e.target.value
                                            setQuestion({ ...question, options: newOptions })
                                        }} key={optIndex} className="w-full h-10 border border-gray-300 rounded-md px-3 mb-2" type="text" placeholder={`Option ${optIndex + 1}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleCreatePoll} className="bg-[#1a72ec] w-full h-10 rounded-lg text-white my-4 justify-self-center">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePollModal;