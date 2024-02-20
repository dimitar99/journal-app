import { Link as RouterLink } from "react-router-dom"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from "./AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register Page'>
            <form>
                <Grid container>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Nombre completo" type="text" placeholder="Nombre Apellido Apellido" fullWidth />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Correo" type="email" placeholder="example@email.com" fullWidth />
                    </Grid>


                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField label="Contraseña" type="password" placeholder="Contraseña" fullWidth />
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>
                                Crear cuenta
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container direction='row' justifyContent='end'>
                        <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
                        <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Ingresar
                        </Link>
                    </Grid>

                </Grid>
            </form>
        </ AuthLayout >
    )
}