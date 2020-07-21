import React, { useState, useRef, useCallback } from 'react'

import { Heading3 } from '@entur/typography'
import { LinkIcon, ClockIcon } from '@entur/icons'

import { Settings } from '../../../settings'
import { ThemeDashbboardPreview } from '../../../assets/icons/ThemeDashboardPreview'
import { persist } from '../../../settings/FirestoreStorage'

import './styles.scss'

const DAYS = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør']

const MONTHS = [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
]

function createTimeString(date: Date, modified: boolean): string {
    const currentYear = new Date().getFullYear()

    const dateString = `${DAYS[date.getDay()]} ${date.getDate()}. ${
        MONTHS[date.getMonth()]
    }`
    const hours = `${date.getHours()}`.padStart(2, '0')
    const minutes = `${date.getMinutes()}`.padStart(2, '0')
    const timeString = `${hours}:${minutes}`
    const yearString =
        currentYear == date.getFullYear() ? '' : `${date.getFullYear()}`
    const prependWords = modified ? 'Sist endret' : 'Ble laget'
    return `${prependWords} ${dateString} ${yearString} ${timeString}`
}

function BoardCard({
    settings,
    id,
    timestamp,
    created,
    className,
}: Props): JSX.Element {
    const [titleEditMode, setTitleEditMode] = useState<boolean>(false)

    const onClickTitle = useCallback(() => {
        event.preventDefault()
        setTitleEditMode(true)
    }, [setTitleEditMode])

    const onBlurTitle = useCallback(
        (e) => {
            event.preventDefault()
            setTitleEditMode(false)
            persist(id, 'boardName', e.target.value)
        },
        [id, setTitleEditMode],
    )

    const preview = ThemeDashbboardPreview(settings.theme)
    const dashboardType = settings.dashboard || 'Chrono'
    const preferredDate = timestamp ? timestamp : created
    const timeString =
        preferredDate != undefined
            ? createTimeString(
                  preferredDate.toDate(),
                  preferredDate == timestamp,
              )
            : 'Ikke endret'
    const boardTitle = settings.boardName || 'Uten navn'
    const boardTitleEditorRef = useRef<HTMLInputElement>()
    const boardTitleElement = titleEditMode ? (
        <input
            className="board-card__text-container__title"
            defaultValue={boardTitle}
            ref={boardTitleEditorRef}
            autoFocus={true}
            onBlur={onBlurTitle}
        />
    ) : (
        <Heading3 className="board-card__text-container__title" margin="none">
            {boardTitle}
        </Heading3>
    )

    return (
        <div className={`board-card ${className ? className : ''}`}>
            <a href={`/t/${id}`}>
                <img
                    className="board-card__preview"
                    src={preview[`${dashboardType}`]}
                />
            </a>

            <div className="board-card__text-container">
                <span onClick={onClickTitle}>{boardTitleElement}</span>

                <div className="board-card__text-container__text">
                    <ClockIcon className="board-card__text-container__text__icon" />
                    <span className="board-card__text-container__text__description">
                        {timeString}
                    </span>
                </div>
                <div className="board-card__text-container__text">
                    <LinkIcon className="board-card__text-container__text__icon" />
                    <span className="board-card__text-container__text__description">
                        {`${window.location.host}/t/${id}`}
                    </span>
                </div>
            </div>
        </div>
    )
}

interface Props {
    settings: Settings
    id: string
    timestamp: firebase.firestore.Timestamp
    created: firebase.firestore.Timestamp
    className?: string
}

export default BoardCard
