import { Container, PostForm } from '../components/index'
import { FormProvider } from 'react-hook-form'

function AddPost() {
    return (
    <>
        <Container>
            <FormProvider>
                <PostForm />
            </FormProvider>
        </Container>
    </>
    )
}

export default AddPost