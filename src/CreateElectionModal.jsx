import { useState } from "react";
import { auth } from "./firebase/firebase";
import { db } from "./firebase/firebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import Toast from "./Toast";

const CreateElectionModal = ({ setIsCreateElectionModal }) => {
    const [electionTitle, setelectionTitle] = useState("")
    const [eligibleVoters, seteligibleVoters] = useState("")
    const [duration, setDuration] = useState(1)
    // Toast state
    const [IsVisible, setIsVisible] = useState(false)
    const [toastMessage, setToastMessage] = useState("")


    const [positions, setPositions] = useState([
        {
            title: "",
            candidates: [{name: "", votes: 0}, {name: "", votes: 0}],
        }
    ]);

    const addPosition = () => {
        if (positions.length < 10) {
            setPositions([...positions, { title: "", candidates: [{name: "", votes: 0}, {name: "", votes: 0}] }])
        }
    }

    const addCandidate = (positionIndex) => {
        if (positions[positionIndex].candidates.length < 10) {
            const updated = [...positions]
            updated[positionIndex] = {
                ...updated[positionIndex],
                candidates: [...updated[positionIndex].candidates, {name: "", votes: 0}]
            }
            setPositions(updated)
        }
    }

    const removePosition = (posIndex) => {
        if (positions.length > 1) {
            setPositions(positions.filter((_, i) => i !== posIndex))
        } else {
            return
        }
    }

    const removeCandidate = (posIndex, canIndex) => {
        if (positions[posIndex].candidates.length > 1) {
            let updated = JSON.parse(JSON.stringify(positions))
            updated[posIndex].candidates = updated[posIndex].candidates.filter((_, i) => i !== canIndex)
            setPositions(updated)
        }
    }


    const [modalError, setmodalError] = useState("")

    async function handleSubmit() {
        const hasInvalidPosition = positions.some(pos => !pos.title)
        const hasInvalidCandidate = positions.some(pos => pos.candidates.some(c => !c.name))

        if (!electionTitle || !eligibleVoters || hasInvalidPosition || hasInvalidCandidate) {
            setIsVisible(true)
            setToastMessage('Please enter all the fields')
            return
        }

        const electionObject = {
            title: electionTitle,
            createdBy: auth.currentUser.displayName,
            createdByUid: auth.currentUser.uid,
            eligibleVoters: eligibleVoters.split("\n").map(v => v.trim()).filter(v => v),
            positions: positions,
            voters: [],
            duration: duration,
            status: "pending",
            createdAt: serverTimestamp(),
            totalVotes: 0
        }

        try {
            let collectionRef = collection(db, "elections")
            await addDoc(collectionRef, electionObject)
            setIsCreateElectionModal(false)
        } catch (error) {
            console.log("Error Detected:", error)
        }

    }

    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="rounded-xl bg-accent-blue w-[95%] max-w-3xl font-montserrat fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2 max-h-[90vh] overflow-y-auto max-sm:rounded-none max-sm:w-full max-sm:max-h-screen max-sm:top-0 max-sm:left-0 max-sm:translate-x-0 max-sm:translate-y-0">
                <div className="flex justify-between border-b border-gray-200 p-4">
                    <p className="font-extrabold">Create New Election</p>
                    <svg onClick={() => { setIsCreateElectionModal(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="p-4">
                    <p className="justify-self-center text-[15px]">{modalError}</p>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                        </svg>
                        <p className="text-[15px]">GENERAL INFO</p>
                    </div>
                    <div className="grid gap-2 my-2">
                        <p>Election Name</p>
                        <div>
                            <input name="electionTitle" onChange={(e) => { setelectionTitle(e.target.value) }} className="w-full border border-gray-200 p-2 rounded-lg" type="text" placeholder="e.g. Student Union Presidency 2026" />
                        </div>
                    </div>
                    <div className="grid gap-2 my-2">
                        <p>Eligible Voter List</p>
                        <div>
                            <textarea name="eligibleVoter" onChange={(e) => { seteligibleVoters(e.target.value) }} className="resize-none h-24 w-full border border-gray-200 p-2 rounded-lg" type="text" placeholder="Just paste them here" />
                        </div>
                    </div>
                    <div className="grid gap-2 my-2">
                        <p>Election Duration</p>
                        <select className="p-2 border border-gray-200 rounded-lg" value={duration} onChange={(e) => setDuration(Number(e.target.value))}>
                            <option value={1}>1 Day</option>
                            <option value={2}>2 Days</option>
                            <option value={3}>3 Days</option>
                        </select>
                    </div>
                    <hr className="text-gray-300 my-4" />
                    <div className="flex justify-between my-4">
                        <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <p className="text-[15px]">BALLOT POSITION</p>
                        </div>
                        <div onClick={addPosition} className="bg-white cursor-pointer flex w-fit gap-2 rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <p className="text-[13px]">Add Positions</p>
                        </div>
                    </div>
                    <div>
                        {positions.map((position, posIndex) => (
                            <div key={posIndex} className="w-full bg-blue-50 p-4 rounded-sm grid items-start grid-cols-[7%_93%] max-sm:grid-cols-1">
                                <div className="border border-gray-200 bg-white flex items-center justify-center rounded-md h-8 w-8">
                                    <p>{posIndex + 1}</p>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center">
                                        <p className="text-[17px] font-raleway max-sm:my-2">Position</p>
                                        <div onClick={() => { removePosition(posIndex) }} className="bg-white cursor-pointer flex w-fit gap-2 rounded-md p-1 my-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                            </svg>
                                            <p className="text-[13px]">Remove Positions</p>
                                        </div>
                                    </div>
                                    <input name="positions" onChange={(e) => {
                                        const updated = [...positions]
                                        updated[posIndex] = { ...updated[posIndex], title: e.target.value }
                                        setPositions(updated)
                                    }} className="w-full h-10 border border-gray-300 rounded-md px-3" type="text" placeholder="Position" />
                                    <div className="px-6">
                                        <div>
                                            <div className="flex justify-between my-2">
                                                <p className="text-[15px] font-raleway my-1">Candidates</p>
                                                <div onClick={() => addCandidate(posIndex)} className="bg-white flex w-fit gap-1 items-center rounded-md p-1 cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                                    </svg>
                                                    <p className="text-[13px]">Add Candidates</p>
                                                </div>
                                            </div>
                                            {position.candidates.map((_, canIndex) => (
                                                <div className="grid my-2">
                                                    <input onChange={(e) => {
                                                        const updated = JSON.parse(JSON.stringify(positions))
                                                        updated[posIndex].candidates[canIndex].name = e.target.value
                                                        setPositions(updated)
                                                    }} key={canIndex} className="w-full h-10 border border-gray-300 rounded-md px-3 mb-2" type="text" placeholder={`Candidate ${canIndex + 1}`} />
                                                    <div onClick={() => removeCandidate(posIndex, canIndex)} className="bg-white flex w-fit gap-1 items-center rounded-md p-1 cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                                        </svg>
                                                        <p className="text-[13px]">Remove Candidates</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <button onClick={handleSubmit} className="bg-[#1a72ec] w-full h-10 rounded-lg text-white my-4 justify-self-center">Submit</button>
                    </div>
                </div>
            </div>
            <Toast IsVisible={IsVisible} message={toastMessage} type="error" setIsVisible={setIsVisible} />
        </div>
    );
}

export default CreateElectionModal;