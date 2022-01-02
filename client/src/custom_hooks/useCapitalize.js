// hook for capitalizing the first character of a string 
export default function useCapitalize (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}