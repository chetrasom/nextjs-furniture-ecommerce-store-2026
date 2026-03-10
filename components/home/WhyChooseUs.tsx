import SectionTitle from "../global/SectionTitle";

const WhyChooseUs = () => {
    return (
        <section className="pb-14">
            <SectionTitle
                text="ហេតុអ្វីជ្រើសរើស Furnova"
                subtitle="យើងផ្តល់ជូនគ្រឿងសង្ហារឹមដែលមានគុណភាព និងរចនាបទទាន់សម័យ"
            />
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                    <div className="text-4xl mb-2">🚚</div>
                    <p>ដឹកជញ្ជូនរហ័ស</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">🛡️</div>
                    <p>គុណភាពខ្ពស់</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">💰</div>
                    <p>តម្លៃសមរម្យ</p>
                </div>
                <div>
                    <div className="text-4xl mb-2">🎨</div>
                    <p>រចនាបទទាន់សម័យ</p>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs