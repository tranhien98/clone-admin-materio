import { styled } from "@mui/material/styles";
import Navigation from "../components/navigation/index"

const VerticalLayoutWrapper = styled('div')({
    height: '100%',
    display: 'flex'
})

const VerticalLayout = props => {
    
    return (
        <>
            <VerticalLayoutWrapper className="layout-wrapper">
                <Navigation />

            </VerticalLayoutWrapper>
        </>
    )
}

export default VerticalLayout;