import { Edit } from 'Admin/scenarios/Edit'
import { TBoard } from 'types/settings'
import classes from 'styles/pages/admin.module.css'
import { Contrast } from '@entur/layout'
import { upgradeBoard } from 'utils/converters'
import { ToastProvider } from '@entur/alert'
import { IncomingNextMessage } from 'types/next'
import { verifyUserSession } from 'Admin/utils/auth'
import { getBoard } from 'Admin/utils/firebase'
import { AdminHeader } from 'Admin/components/AdminHeader'

export async function getServerSideProps({
    params,
    req,
}: {
    params: { id: string }
    req: IncomingNextMessage
}) {
    const { id } = params

    const loggedIn = (await verifyUserSession(req)) !== null

    if (!loggedIn)
        return {
            redirect: {
                destination: '/#login',
                permanent: false,
            },
        }

    const board: TBoard | undefined = await getBoard(id)

    if (!board) {
        return {
            notFound: true,
        }
    }

    const convertedBoard = upgradeBoard(board)

    return {
        props: {
            loggedIn,
            board: convertedBoard,
        },
    }
}

function AdminPage({ loggedIn, board }: { loggedIn: boolean; board: TBoard }) {
    return (
        <div className={classes.root}>
            <AdminHeader loggedIn={loggedIn} />
            <Contrast>
                <ToastProvider>
                    <Edit initialBoard={board} />
                </ToastProvider>
            </Contrast>
        </div>
    )
}

export default AdminPage
