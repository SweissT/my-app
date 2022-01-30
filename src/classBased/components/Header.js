import React from "react"

const Headers = () => {
    const headerStyle = {
        padding: "20px 0",
        lineHeight: "1.5em",
    }
    return (
        <header style={headerStyle}>
            <h1
                style={{
                    fontSize: "Grem",
                    fontWeight: "600",
                    marginBottom: "2rem",
                    lineHeight: "1em",
                    color: "#ececec",
                    textTransform: "lowercase",
                    testAlight: "center",
                }}
            >
                todos
            </h1>
        </header>
    )
}

export default Headers