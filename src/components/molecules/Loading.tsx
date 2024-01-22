interface LoadingProps {
    message: string;
}
export const Loading = (props: LoadingProps) => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <p>{props.message}</p>
        </div>
    )
}