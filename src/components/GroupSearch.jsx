import React, { Component } from "react";
import {  useDispatch } from 'react-redux'

function GroupSearch() {

    const dispatch = useDispatch()

    async function search(searchTerm) {
        if (searchTerm === undefined) {
            alert("Try Again")
            return;
        }
        try {
            const res = await fetch("/api/searchfilter", {
                method:"POST",
                headers: {
                    "Content-type":"application/json",
                },
                body: JSON.stringify({searchTerm: searchTerm})
            })
            const data = await res.json()
            dispatch({type: "SET-GROUPS", payload: data})
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className="text-white m-8 flex flex-row items-center justify-center">
            <input placeholder="Search all groups" className="border-2 lg:w-96 sm:w-72 w-40 border-green-400 p-2 m-2 text-black" type="text" onKeyDown={e => e.which === 13 ? search(e.target.value) : null }/>
        </div>
    )
}

export default GroupSearch;
