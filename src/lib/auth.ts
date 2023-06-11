import jwt from 'jsonwebtoken';

export const getAuthenticatedUser = (req) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.includes("bearer")
    ) {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                return {
                    id: decoded["userId"],
                    name: decoded["name"],
                    email: decoded["email"],
                };
            }
            catch(err) {
                return null
            }
        }
    }
    return null;
};

export const signToken = (userId, name, email) => {
    return jwt.sign(
        { "userId": userId, "name": name, "email": email },
        process.env.JWT_SECRET,
        { algorithm: "HS256", expiresIn: "1d" }
    );
}
