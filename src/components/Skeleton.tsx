export const Skeleton = () => {

    return (
        <div>
            <div>
                {Array.from({length: 48}, (item, index) => (
                    <div key={index}>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}