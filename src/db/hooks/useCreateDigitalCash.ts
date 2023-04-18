import { useMutation } from "@tanstack/react-query";
import { createCash } from "../services/createCash";

export const useCreateDigitalCash = () => useMutation(createCash);
