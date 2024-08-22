// signup func
const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } =
            req.body;
    } catch (err) {}
};

// login func
const login = async (req, res) => {};

// logout func
const logout = async (req, res) => {};

// export all funcs
export { signup, login, logout };
