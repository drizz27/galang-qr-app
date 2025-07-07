export default function ({ $auth, redirect }) {
    if ($auth.loggedIn) {
        // If the user is logged in, redirect to the home page
        return redirect('/');
    }
}