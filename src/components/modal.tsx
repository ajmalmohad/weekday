import { Box, Modal, Typography } from "@mui/material"
import './css/modal.css'

export const MiniModal = ({ heading, description, open, handleClose }: {
    heading: string
    description: string
    open: boolean
    handleClose: () => void
}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className="modal">
                <Typography id="modal-modal-title" variant="h4" component="h2" textAlign="center" sx={{ fontSize: 20, marginBottom: 4 }}>
                    {heading}
                </Typography>
                <Typography id="modal-modal-description" variant="body1" component="p" sx={{ fontSize: 16 }}>
                    {description}
                </Typography>
            </Box>
        </Modal>
    )
}