import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://cdn.dribbble.com/users/1803663/screenshots/11400179/media/25558ede8bcb553fd48d7ed339e136ee.png?compress=1&resize=400x300"
                        alt="imagen"
                    />
                </div>

            </div>
            
        </div>
    )
}
