import React from 'react'

import s from './layoutWithSidebar.module.scss'

interface ILayoutWithSidebarProps {
    children: React.ReactNode
}

const LayoutWithSidebar: React.FC<ILayoutWithSidebarProps> = ({ children }) => {
    return (
        <div className={s.layout}>
            {children}
        </div>
    )
}


export default LayoutWithSidebar