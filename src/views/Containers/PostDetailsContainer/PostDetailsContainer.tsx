import React from 'react'
import { useDispatch } from 'react-redux'
import Container from '../../Components/Container/Container'

import { useParams } from 'react-router-dom'
import { usePostDetails } from '../../../tools/hooks/usePostDetails'
import LayoutWithSidebar from '../../Components/Layouts/LayoutWithSidebar/LayoutWithSidebar'
import LayoutContent from '../../Components/Layouts/LayoutContent/LayoutContent'
import DetailArticle from './components/DetailArticle/DetailArticle'


import { postDetailsActions } from '../../../redux/postDetails/actions'


import s from './postDetailsContainer.module.scss'

const PostDetailsContainer: React.FC = () => {

    const params = useParams()

    const { article } = usePostDetails()
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(postDetailsActions.getArticle(String(params.id)))
    }, [])

    return (
        <div>
            <Container>
                <LayoutWithSidebar>
                    <LayoutContent>
                        <DetailArticle />
                    </LayoutContent>

                </LayoutWithSidebar>
            </Container>
        </div>
    )
}

export default PostDetailsContainer