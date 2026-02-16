// import db from "@/utils/db";

const PracticesPrisma = async () => {
    // # CREATE
    // const profile = await db.testProfile.create({
    //     data: {
    //         name: "Latte Milk"
    //     },
    // });

    // # GET all products
    // const users = await db.testProfile.findMany();

    return (
        <section className='pt-20'>
            <h1 className="font-bold text-3xl mb-4 border-b">User Profile</h1>
            <ul>
                {/* {users.map((user) => {
                    return (
                        <div key={user.id}>
                            <h3 className="text-lg font-medium">{user.name}</h3>
                        </div>
                    )
                })} */}
            </ul>
        </section>
    )
}

export default PracticesPrisma