import { Grid, Typography } from "@mui/material"
import PropTypes from 'prop-types'

export const AuthLayout = ({ title, children }) => {
    return (
        <>
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
            >

                <Grid item
                    className="box-shadow"
                    xs={3}
                    sx={{
                        width: { md: 450 },
                        backgroundColor: 'white',
                        padding: 3,
                        borderRadius: 2
                    }}>

                    <Typography variant="h3" sx={{ mb: 1 }}>{title}</Typography>

                    {children}

                </Grid >

            </Grid >
        </>
    )
}

AuthLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}