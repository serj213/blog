import React from 'react'

import s from './layoutContent.module.scss'

interface ILayoutContent {
    children: React.ReactNode
}

const LayoutContent: React.FC<ILayoutContent> = ({ children }) => {
    return (
        <div className={s.layoutContent}>
            {children}
        </div>
    )
}

export default LayoutContent
