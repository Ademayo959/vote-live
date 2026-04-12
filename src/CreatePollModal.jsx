const CreatePollModal = () => {
    return (
        <div>
            <div onClick={(e) => e.stopPropagation()} className="bg-accent-blue w-[95%] max-w-3xl font-montserrat fixed top-1/2 left-1/2 -translate-x-1/2 z-100 -translate-y-1/2 max-h-[90vh] overflow-y-auto max-sm:w-full max-sm:max-h-screen max-sm:top-0 max-sm:left-0 max-sm:translate-x-0 max-sm:translate-y-0">
                <div className="flex justify-between border-b border-gray-200 p-4">
                    <p className="font-extrabold">Create New Election</p>
                    <svg onClick={() => { setIsCreateElectionModal(false) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                    </svg>
                    <p className="text-[15px]">GENERAL INFO</p>
                </div>
                <div className="grid gap-2 my-2">
                    <p>Election Name</p>
                    <div>
                        <input className="w-full border border-gray-200 p-2 rounded-lg" type="text" placeholder="e.g. Student Union Presidency 2026" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatePollModal;