import React from 'react'

const CandidateCard = ({ candidates, status }) => {
    return (

        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-dark dark:text-light">
                Candidates
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {candidates?.length > 0 ? (
                    candidates.map((candidate) => (
                        <div
                            key={candidate._id}
                            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300"
                        >

                            {/* Image */}
                            <div className="overflow-hidden rounded-xl">
                                <img
                                    src={candidate.symbol}
                                    alt={candidate.fullName}
                                    className="w-full h-[160px] object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Info */}
                            <div className="mt-4 space-y-1">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {candidate.fullName}
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Symbol: <span className="font-medium">{candidate.symbolName}</span>
                                </p>

                                <p className="text-sm text-gray-500">
                                    Contact: {candidate.contactNumber}
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                disabled={status === "completed"}
                                className={`w-full mt-4 py-2 rounded-lg text-white font-medium transition ${status === "completed"
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                                    }`}
                            >
                                {status === "completed" ? "Voting Closed" : "Vote Now"}
                            </button>

                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No candidates available</p>
                )}

            </div>
        </div>
    )
}

export default CandidateCard