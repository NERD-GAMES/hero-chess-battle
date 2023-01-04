import { firebase } from '../firebase'

export const fileUploader = async (
  file: File,
  userId: string,
  onProgress: (e: any) => void,
  onError: (e: any) => void,
  onComplete: (url: string) => void,
) => {
  const storage = firebase.storage()
  const storageRef = await storage.ref(
    `arquivos/${userId}/${new Date().getTime()}/${file.name}`,
  )
  const task = storageRef.put(file)
  task.on('state_changed', onProgress, onError, async () => {
    const urlImage = await task.snapshot.ref.getDownloadURL()
    console.log(urlImage)
    onComplete(urlImage)
  })
}
