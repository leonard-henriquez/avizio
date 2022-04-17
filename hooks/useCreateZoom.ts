import { useMutation } from "react-query";

const useCreateZoom = ({ topic, startDate, endDate }: { topic: string, startDate: Date, endDate: Date }) => {
  return useMutation(['createZoom'], async (): Promise<{start_time: string, join_url: string}> => {
    const result = await fetch(`/api/create_zoom`, {
      method: 'post',
      body : JSON.stringify({
        topic,
        startDate,
        endDate,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result.json();
  })
}

export default useCreateZoom
