import axios from 'axios'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { Title } from '../components/Title'
import { Button } from '../components/Button'
import { AiFillExclamationCircle } from 'react-icons/ai'

const createUserFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .transform((name) => {
      return name
        .toLowerCase()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1))
        })
        .join(' ')
    }),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email address').toLowerCase(),
  message: z.string().trim().min(1, 'Message is required'),
})

type MessageFormData = z.infer<typeof createUserFormSchema>

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<MessageFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleMessage = async (data: MessageFormData) => {
    setIsLoading(true)
    await axios.post(`${import.meta.env.VITE_API_URL}/contacts`, data)

    reset()
    setIsLoading(false)
  }

  const inputStyle =
    'h-10 rounded-sm bg-zinc-800 border border-zinc-800 focus:border-amber-300 duration-500 p-2 text-zinc-400 text-base outline-none'

  return (
    <>
      <Title text={'Drop me a line'} />
      <div className="flex flex-col gap-6">
        <form onSubmit={handleSubmit(handleMessage)} className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" className={inputStyle} {...register('name')} />
            {errors.name && (
              <span className="flex items-center gap-1 text-sm text-red-500">
                <AiFillExclamationCircle />
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" className={inputStyle} {...register('email')} />
            {errors.email && (
              <span className="flex items-center gap-1 text-sm text-red-500">
                <AiFillExclamationCircle />
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              className="h-[10rem] resize-none rounded-sm border border-zinc-800 bg-zinc-800 p-2 text-base text-zinc-400 outline-none duration-500 focus:border-amber-300"
              {...register('message')}
            ></textarea>
            {errors.message && (
              <span className="flex items-center gap-1 text-sm text-red-500">
                <AiFillExclamationCircle />
                {errors.message.message}
              </span>
            )}
          </div>
          <div className="flex justify-end">
            <Button isLoading={isLoading} />
          </div>
        </form>
      </div>
    </>
  )
}
