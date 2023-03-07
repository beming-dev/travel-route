import { authOptions } from '../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
    const session = await getServerSession(authOptions);

    console.log(session);

    if (!session?.user) {
        redirect('/login');
    } else {
        redirect('/service');
    }
}
