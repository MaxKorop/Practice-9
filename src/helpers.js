function getId(prefix = "key") {
    let counter = 0
    return () => {
      counter+=1
      return `${prefix}_${counter}`
    };
}

export default getId;