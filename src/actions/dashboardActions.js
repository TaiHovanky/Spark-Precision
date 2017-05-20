export const testing = () => {
    console.log('action creator running')
    return {
        type: 'TESTING',
        field: [1,2,3]
    }
}