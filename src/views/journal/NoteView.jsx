import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../../components/journal/ImageGallery"

export const NoteView = () => {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems={"center"} sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight="light">3 de septiembre, 1984</Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Que sucedió hoy?"
                    sx={{ border: 'none', mb: 1 }}
                    minRows={5}
                />
            </Grid>

            <ImageGallery />
        </Grid>
    )
}