export interface CacheMethods { 
    /**
     * @description get
     */
    get: (key: string) => any;
  
    /**
     * @description set
     */
    set: (key: string, value: any) => void;
  
    /**
     * @description: setJSON
     */
    setJSON: (key: string, value: any) => void;
  
    /**
     * @description: getJSON
     */
    getJSON: (key: string) => any;
  
    /**
     * @description remove
     */
    remove: (key: string) => void;
}